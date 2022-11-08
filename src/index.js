import App from './App';
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import { PublicClientApplication } from "@azure/msal-browser";

const msalInstance = new PublicClientApplication(msalConfig);

    <MsalProvider instance={msalInstance}>
    <App />
    </MsalProvider>
