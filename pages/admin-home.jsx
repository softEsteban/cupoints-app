import RootLayout from "../app/layout";

export default function Home() {

  // Mocked data for restaurants
  const restaurants = [
    {
      name: "Restaurant A",
      description: "Delicious cuisine from around the world.",
    },
    {
      name: "Restaurant B",
      description: "Authentic local dishes served here.",
    },
    {
      name: "Restaurant C",
      description: "Great ambiance and gourmet food.",
    },
    {
      name: "Restaurant D",
      description: "Family-friendly restaurant with a variety of options.",
    },
  ];

  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32">
        <h1>Hello world from admin home</h1>
      </main>
    </RootLayout>
  );
}
