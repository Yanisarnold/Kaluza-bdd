// function to search for the user name through the api
const API_URL = `https://api.agify.io/?name=`

export const searchUser = async (nameToSearch :  any) => {
  try {
    const response = await fetch(API_URL + nameToSearch);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}