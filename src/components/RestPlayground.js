import React, { useState } from 'react';

function RestPlayground() {
    const [endpoint, setEndpoint] = useState('https://api.travelgate.com');
    const [method, setMethod] = useState('POST');
    const [requestData, setRequestData] = useState('');
    const [response, setResponse] = useState('');

    const sendRequest = async () => {
        try {
            const res = await fetch(endpoint, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: method === 'GET' ? null : requestData
            });
            const data = await res.json();
            setResponse(JSON.stringify(data, null, 2));
        } catch (error) {
            setResponse('Error: ' + error.toString());
        }
    };

    return (
        <div class="playground-wrap">
            <div>
                <select id="method" value={method} onChange={(e) => setMethod(e.target.value)} class="playground-select">
                    <option>GET</option>
                    <option>POST</option>
                    {/* Add other methods as necessary */}
                </select>
            </div>
            <div>
                <input
                    id="endpoint"
                    type="text"
                    placeholder="https://api.travelgate.com"
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="requestData">Request Data (for POST, PUT, etc.):</label>
                <textarea
                    id="requestData"
                    value={requestData}
                    onChange={(e) => setRequestData(e.target.value)}
                ></textarea>
            </div>

            <div>
                <button onClick={sendRequest} class="playground-btn">Send Request</button>
            </div>

            <div>
                <label>Response:</label>
                <pre>{response}</pre>
            </div>
        </div>
    );
}

export default RestPlayground;
