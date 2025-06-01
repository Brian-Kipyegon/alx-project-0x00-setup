import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Landing() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>
      <Card />
      <Card />
      <Card />

      <div className="mt-6 space-x-4">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
}
