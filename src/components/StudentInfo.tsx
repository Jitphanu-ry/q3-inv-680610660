import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export function StudentInfo() {
  return (
    // Use Drawer component to display student information
  <Drawer swipeDirection="right">
    <DrawerTrigger render={<Button variant="secondary" />}>Jitphanu Riyasarn</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
        <DrawerDescription>Student information</DrawerDescription>
      </DrawerHeader>
        <Card className="p-4">
          <span>Jitphanu Riyasarn</span>
          <span>นักศึกษามหาวิทยาลัยเชียงใหม่</span>
          <span>Hobbies: ดูหนัง,ฟังเพลง,เล่นเกม</span>
          <span>Email:jitphanuriyasarn@gmail.com</span>
          <span>Social:</span>
          <span>รหัสนักศึกษา:680610660</span>
        </Card>
      <DrawerFooter>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  );
}
