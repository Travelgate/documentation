import 'graphiql/setup-workers/webpack';

// Monaco terminates its workers when GraphiQL unmounts (e.g. switching playground tabs).
// A worker that is still importing its chunks then reports the aborted request as an
// uncaught NetworkError, which surfaces as a global error and the dev server overlay.
// Cancel only the errors of workers that were already terminated.
const environment = globalThis.MonacoEnvironment;

if (typeof environment?.getWorker === 'function') {
    globalThis.MonacoEnvironment = {
        ...environment,
        getWorker(workerId, label) {
            const worker = environment.getWorker(workerId, label);
            let terminated = false;
            const terminate = worker.terminate.bind(worker);
            worker.terminate = () => {
                terminated = true;
                terminate();
            };
            worker.addEventListener('error', (event) => {
                if (terminated) {
                    event.preventDefault();
                }
            });
            return worker;
        },
    };
}
