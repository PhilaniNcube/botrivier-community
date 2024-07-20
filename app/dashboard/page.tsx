import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getBusinessDirectory } from "@/lib/fetchers/directory";

export const dynamic = "force-dynamic";

const page = async () => {

  const {data, count} = await getBusinessDirectory()

  console.log({data, count})

  return <main className="w-full">
    <Card className="max-w-lg pt-3">

      <CardContent>
<CardTitle>
          Number of businesses
        </CardTitle>
        <div>
          {count}
        </div>
      </CardContent>
    </Card>
  </main>;
};
export default page;
