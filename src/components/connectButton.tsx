"use client";

import { useEffect, useRef } from "react";
import {
    useConnectModal,
    useAccountModal,
    useChainModal
} from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import Button from "@mui/material/Button/Button";

export const ConnectBtn = () => {
    const { isConnecting, isConnected, chain } = useAccount();

    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();
    const { disconnect } = useDisconnect();

    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    if (!isConnected) {
        return (
            <Button
                variant="contained"
                color="primary"
                component="a"
                target="blank"
                size="large"
                onClick={async () => {
                    if (isConnected) {
                        disconnect();
                    }
                    openConnectModal?.();
                }}
                disabled={isConnecting}
            >
                {isConnecting ? 'Connecting...' : 'Connect your wallet'}
            </Button>
        );
    }

    if (isConnected && !chain) {
        return (
            <Button
                variant="contained"
                color="primary"
                component="a"
                target="blank"
                size="large"
                onClick={openChainModal}
            >
                Wrong network
            </Button>
        );
    }

    return (
        <div className="max-w-5xl w-full flex items-center justify-between">
            <div
                className="flex justify-center items-center px-4 py-2 border border-neutral-700 bg-neutral-800/30 rounded-xl font-mono font-bold gap-x-2 cursor-pointer"
                onClick={async () => openAccountModal?.()}
            >
                <p>Account</p>
            </div>
            <Button
                variant="contained"
                color="primary"
                component="a"
                target="blank"
                size="large"
                onClick={openChainModal}
            >
                Switch Networks
            </Button>
        </div>
    );
};