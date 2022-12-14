const chain = hre.network.name;

async function main() {
    // Grab the contract factory 
    const MyNFT = await ethers.getContractFactory("Smartran");
 
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy(); // Instance of the contract 
    console.log("Contract deployed to address:", myNFT.address);
    console.log(`npx hardhat verify --network ${chain} ${myNFT.address}`);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });