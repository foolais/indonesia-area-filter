export async function regionLoader() {
  const res = await fetch("/data/indonesia_regions.json");

  console.log({ res: res.json });
  return res.json();
}
