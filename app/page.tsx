import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export default function Home() {
  return (
    <div>
      <div className="my-10 flex justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          <Button>Create New Store</Button>
          <Button>Export</Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 space-y-4">
          <Card className="h-[200px]">This is a big card</Card>
          <Card className="h-[200px]">This is a big card</Card>
          <Card className="h-[200px]">This is a big card</Card>
          <Card className="h-[200px]">This is a big card</Card>
        </div>
        <div className="space-y-4">
          <Card className="h-[450px]">This is a smaller one</Card>
          <Card className="h-[150px]">This is a smaller one</Card>
          <Card className="h-[150px]">This is a smaller one</Card>
          <Card className="h-[150px]">This is a smaller one</Card>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}
