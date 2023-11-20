import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

function RestPlayground() {
    const [endpoint, setEndpoint] = useState('https://api.travelgate.com');
    const [method, setMethod] = useState('POST');
    const [requestData, setRequestData] = useState('');
    const [response, setResponse] = useState('');

    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setRequestData(val);
    }, []);

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
        <div className="playground-wrap">
            <div>Method & URL</div>
            <div className={`post-method`}>
                <select id="method" value={method} onChange={(e) => setMethod(e.target.value)} className="playground-select">
                    <option>GET</option>
                    <option>POST</option>
                    {/* Add other methods as necessary */}
                </select>
            </div>
            <div className={`endpoint`}>
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
                <CodeMirror
                    value={requestData}
                    height="300px"
                    extensions={[json()]}
                    theme={vscodeDark}
                    onChange={onChange}
                />
                {/*<textarea*/}
                {/*    id="requestData"*/}
                {/*    value={requestData}*/}
                {/*    onChange={(e) => setRequestData(e.target.value)}*/}
                {/*    rows={10}*/}
                {/*></textarea>*/}
            </div>

            <div>
                <button onClick={sendRequest} className="playground-btn">Send Request</button>
            </div>

            <div className={response ? `` : `hidden`}>
                <CodeBlock
                    language="jsx"
                    title={`Response from ${endpoint}`}
                    showLineNumbers
                >
                    {response}
                </CodeBlock>
            </div>
        </div>
    );
}

export default RestPlayground;
