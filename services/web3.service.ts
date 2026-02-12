const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

export async function getBalance(address: string) {
  const balance = await provider.getBalance(address);
  return ethers.formatEther(balance);
}
