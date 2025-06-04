import data from "../data/data.json"

interface UserData {
  name: string;
  age: number | null;
  count: number;
}

// Mock responses for different test scenarios
// data stored in .json file
const mockResponses: Record<string, UserData> = {
  ...data
};


// created a basic function as a fetch functionality to map out the expected result
//  this function takes the name and return mockResponses to test different scenarios 
// Modeling the fetch api 
export const userMockSearch = async (nameToSearch: any) => {
  return  mockResponses[nameToSearch];
}
