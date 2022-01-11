import { ColorModes } from "~/@types";
import Card from "~/components/Card";
import Select from "~/components/Select";

export default function Header() {
  return (
    <Card className="flex justify-between text-2xl text-white py-3 px-6 rounded-none">
      <p>Dashboard</p>
      <Select onChange={console.log}>
        <Select.Button>Color mode</Select.Button>
        <Select.Items>
          <Select.Item value={ColorModes.Light}>Light mode</Select.Item>
          <Select.Item value={ColorModes.Dark}>Dark mode</Select.Item>
          <Select.Item value={ColorModes.System}>System settings</Select.Item>
        </Select.Items>
      </Select>
    </Card>
  );
}
