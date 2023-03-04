import { create } from "ipfs-http-client";

const projectId = "2MVyPH0DoM5G49wW7CeeJlibcht";
const projectSecretKey = "3f15cc01ebaeda95eff90e107a88d906";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
  "base64"
)}`;

export const subdomain = "https://metail-nft.infura-ipfs.io";

export const client = create({
  host: "infura-ipfs.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});
