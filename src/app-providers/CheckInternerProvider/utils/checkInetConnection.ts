import { getNetworkStateAsync } from 'expo-network';

/**
 * Немедленно проверяет наличие подключения к интернету.
 * Возвращает true, если устройство подключено к сети и интернет доступен.
 */
export const checkInternetConnection = async (): Promise<boolean> => {
    try {
        const status = await getNetworkStateAsync();
        return status.isConnected && status.isInternetReachable !== false;
    } catch (error) {
        console.warn('Failed to get network state', error);
        return false;
    }
};