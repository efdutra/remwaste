import { Skip } from '../types/skip';

const API_BASE_URL = 'https://app.wewantwaste.co.uk/api';

export async function fetchSkipsByLocation(postcode: string, area: string): Promise<Skip[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/skips/by-location?postcode=${encodeURIComponent(postcode)}&area=${encodeURIComponent(area)}`
    );

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    console.log('Raw API Data', data);
    return data
  } catch (error) {
    console.error('Error fetching skips:', error);
    throw error;
  }
}