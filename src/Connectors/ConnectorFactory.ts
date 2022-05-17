import {initializeConnector} from "@web3-react/core";
import {Network} from "@web3-react/network";
import {URLS} from "./Chains";

export class ConnectorFactory {
    connectors: { [key: number]: any } = {}

    public createConnector = (chainId: number) => {
        let connector = this.connectors[chainId]
        if (!connector) {
            connector = this.createNewConnector()
            this.connectors[chainId] = connector
        }

        return connector
    }

    private createNewConnector = () => {
        return initializeConnector<Network>(
            (actions) => new Network(actions, URLS),
            Object.keys(URLS).map((chainId) => Number(chainId)));
    }
}