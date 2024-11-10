import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import headerCss from "../header.module.css";

export default function DropdownMenuComp() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={headerCss.navButton}>Features ▿</DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col">
        <div className="flex flex-row m-4">
          <div className="m-4">
            <DropdownMenuLabel className="text-lg">Discover</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="space-y-3">
            <DropdownMenuItem>Custom Branded website</DropdownMenuItem>
            <DropdownMenuItem>User Mobile App</DropdownMenuItem>
            <DropdownMenuItem>Business Webpage</DropdownMenuItem>

            </div>
          </div>
          <div
            style={{
              borderLeft: "1px solid #b8b8b8",
              height: "350px",
              margin: "2vw"
            }}
          ></div>
          <div className="m-4">
            <DropdownMenuLabel className="text-lg">Manage</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex flex-row">
              <div className="space-y-3">
                <DropdownMenuItem>Courses</DropdownMenuItem>
                <DropdownMenuItem>Classess</DropdownMenuItem>
                <DropdownMenuItem>Appointments</DropdownMenuItem>
                <DropdownMenuItem>Services</DropdownMenuItem>
                <DropdownMenuItem>Retreats</DropdownMenuItem>
                <DropdownMenuItem>Payments</DropdownMenuItem>
                <DropdownMenuItem>Design Tools</DropdownMenuItem>
              </div>
              <div className="space-y-3">
                <DropdownMenuItem>Communication</DropdownMenuItem>
                <DropdownMenuItem>Trail Session</DropdownMenuItem>
                <DropdownMenuItem>Staff Roles</DropdownMenuItem>
                <DropdownMenuItem>Workshops</DropdownMenuItem>
                <DropdownMenuItem>Reporting tools</DropdownMenuItem>
                <DropdownMenuItem>Multi-Location</DropdownMenuItem>
                <DropdownMenuItem>Events</DropdownMenuItem>
              </div>
            </div>
          </div>
          <div
            style={{
              borderLeft: "1px solid #b8b8b8",
              height: "350px",
              margin: "2vw"
            }}
          ></div>
          <div className="m-4">
            <DropdownMenuLabel className="text-lg">Grow</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="space-y-3">
            <DropdownMenuItem>AI Marketing Tools</DropdownMenuItem>
            <DropdownMenuItem>Social Media Integration</DropdownMenuItem>
            <DropdownMenuItem>CRM</DropdownMenuItem>

            </div>
          </div>
        </div>
        <div style={{alignSelf: 'center'}} className="m-6">
            <button className={`place-self-center ${headerCss.orangeButton}`}>See all feature ▶︎</button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
