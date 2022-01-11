import { ColorModes } from "~/@types";
import Card from "~/components/Card";
import Select from "~/components/Select";
import SunIcon from "@heroicons/react/outline/SunIcon";
import MoonIcon from "@heroicons/react/outline/MoonIcon";
import DesktopComputerIcon from "@heroicons/react/outline/DesktopComputerIcon";
import { getColorModeFromHTML, updateColorMode } from "~/utils/theme";
import { isClient } from "~/utils/env";

const THEME_MODES = {
  [ColorModes.Light]: {
    icon: SunIcon,
    title: "Light mode",
  },
  [ColorModes.Dark]: {
    icon: MoonIcon,
    title: "Dark mode",
  },
  [ColorModes.System]: {
    icon: DesktopComputerIcon,
    title: "System settings",
  },
};

export default function Header() {
  return (
    <Card className="flex justify-between text-2xl text-slate-600 dark:text-white py-3 px-6 rounded-none">
      <p>Dashboard</p>
      {isClient() && (
        <Select
          onChange={updateColorMode}
          value={localStorage.theme || getColorModeFromHTML()}
        >
          <Select.Button>
            {({ value }) => {
              const { icon: Icon } = THEME_MODES[value];

              return <Icon className="dark:text-white w-6" />;
            }}
          </Select.Button>
          <Select.Items>
            {Object.entries(THEME_MODES).map(([key, { icon: Icon, title }]) => (
              <Select.Item key={key} className="flex gap-x-2" value={key}>
                <Icon className="dark:text-white w-5" />
                {title}
              </Select.Item>
            ))}
          </Select.Items>
        </Select>
      )}
    </Card>
  );
}
