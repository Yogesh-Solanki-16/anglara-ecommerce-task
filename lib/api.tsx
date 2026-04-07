export async function getProducts() {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/products`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
