import React from "react";
import {MasterChefEndblockInfo} from "./MasterChefEndblockInfo";
import {EndblockData} from "../../Connectors/HubData";
import {ConnectorFactory} from "../../Connectors/ConnectorFactory";

const MasterChefEndblockList = ({networkData, connectorFactory}: { networkData: EndblockData[], connectorFactory: ConnectorFactory }) => {
    return (
        <div
            className="min-w-100 m-6 block flex w-96 flex-col gap-y-4 rounded-lg bg-gray-50 p-6 shadow-md dark:border-gray-700 dark:bg-dm-secondary">
            <div className="flex h-28 text-blue">
                <p className="mx-auto my-auto text-8xl">&#128104;&#8205;&#127859;</p>
            </div>
            {networkData.map((network, key) => {
                let connector = connectorFactory.createConnector(network.chainId)
                return <MasterChefEndblockInfo key={key} networkData={network} connector={connector}/>
            })}
        </div>
    )
}


export default MasterChefEndblockList