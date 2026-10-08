import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function DashboardTabs() {
  return (
  <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="category">By Category</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewCards/>
        </TabsContent>
        <TabsContent value="category">
          <CategoryCards/>
        </TabsContent>
      </Tabs>
  );
}
