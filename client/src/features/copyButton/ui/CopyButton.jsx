import React from 'react';
import {Button} from "../../../shared/";

export const CopyButton = ({text}) => {
    const [copied, setCopied] = React.useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    return (
        <div className="relative">
            {
                copied && <div
                    className="absolute bottom-0 right-0 z-10 rounded-md border-2 border-gray-200 bg-white p-1.5">Copied!</div>
            }
            <Button className="float-right mt-3 w-28" onClick={() => copyToClipboard()}>
                Copy
            </Button>
        </div>
    );
};
