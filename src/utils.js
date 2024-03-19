/**
 * Replaces the client in the settings object of the given input string.
 * Used for GraphQL samples as the client needs to be replaced with the one
 * authenticated user has access to.
 *
 * @param inputString
 * @param newClient
 * @returns {string}
 */
export function replaceClient(inputString, newClient) {
    const jsonObj = JSON.parse(inputString);
    if (jsonObj?.settings?.client) {
        jsonObj.settings.client = newClient;
        return JSON.stringify(jsonObj, null, 2);
    }

    return inputString;
}
