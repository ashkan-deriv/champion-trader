import React from "react";

import { useTradeStore } from "@/stores/tradeStore";

export const EntryExitDetails: React.FC = () => {
    const contractDetails = useTradeStore((state) => state.contractDetails);

    if (!contractDetails) {
        return null;
    }

    const { startTime, startTimeGMT, entrySpot, entryTimeGMT, exitTime, exitTimeGMT, exitSpot } =
        contractDetails;
    const details = [
        { label: "Start time", value: startTime, subValue: startTimeGMT },
        { label: "Entry spot", value: entrySpot, subValue: entryTimeGMT },
        { label: "Exit time", value: exitTime, subValue: exitTimeGMT },
        { label: "Exit spot", value: exitSpot, subValue: exitTimeGMT },
    ];

    return (
        <div
            className="mt-4 p-4 bg-theme rounded-lg border-b border-theme"
            style={{
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
            }}
        >
            <h2 className="text-[14px] leading-[22px] font-ibm-plex font-bold text-theme mb-4">
                Entry & exit details
            </h2>
            {details.map((detail, index) => (
                <div
                    key={index}
                    className="col-span-2 flex justify-between border-b border-theme py-2"
                >
                    <span className="text-theme-muted font-ibm-plex text-[14px] leading-[22px] font-normal">
                        {detail.label}
                    </span>
                    <div className="text-right">
                        <span className="text-theme font-ibm-plex text-[14px] leading-[22px] font-normal block pb-1">
                            {detail.value}
                        </span>
                        {detail.subValue && (
                            <span className="text-theme-muted font-ibm-plex text-[12px] leading-[18px] font-normal block">
                                {detail.subValue}
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
