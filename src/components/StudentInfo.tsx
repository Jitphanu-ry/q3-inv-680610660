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
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


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
          <img src="me1.webp"/>
          <CardHeader>
            <CardTitle>Jitphanu Riyasarn</CardTitle>
              นักศึกษามหาวิทยาลัยเชียงใหม่
          </CardHeader>
          <span>Hobbies: ดูหนัง,ฟังเพลง,เล่นเกม</span>
          <span>Email:jitphanuriyasarn@gmail.com</span>
          <span>Social:https://www.facebook.com/jitphanu.riyasarn/</span>
          <CardFooter>รหัสนักศึกษา:680610660</CardFooter>
        </Card>
      <DrawerFooter>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  );
}
