import { Image } from "~/@types";
import clsx from "clsx";
import DashboardCard from "~/components/DashboardCard";

type Member = {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  country: string;
  statusId: string;
  image: Image;
};

type Status = {
  id: string;
  title: string;
  color: string;
};

interface MembersListProps {
  members: Member[];
  statuses: Status[];
}

export default function MembersList({ members, statuses }: MembersListProps) {
  return (
    <DashboardCard className="w-3/5" title="Top Members">
      <div className="flex flex-col">
        {members.map(
          (
            { id, firstName, lastName, bio, country, statusId, image },
            index
          ) => {
            const { title: statusTitle, color: statusColor } =
              statuses.find(({ id }) => id === statusId) || {};
            const name = `${firstName} ${lastName}`;

            return (
              <div
                key={id}
                className={clsx("flex items-center gap-x-4 py-2 px-4", {
                  "bg-cyan-50 dark:bg-slate-900": index % 2,
                })}
              >
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src={image.small}
                  alt={name}
                />
                <p className="w-1/3 text-sm text-slate-600 dark:text-white">
                  {name}
                </p>
                <p className="w-1/5 text-sm text-slate-400">{bio}</p>
                <p className="w-1/5 text-sm text-slate-400">{country}</p>
                {statusTitle && (
                  <div className="flex items-center gap-x-2 text-xs font-medium text-slate-600 dark:text-white">
                    <span
                      className="rounded-full w-2 h-2"
                      style={{ backgroundColor: statusColor }}
                    />
                    {statusTitle}
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </DashboardCard>
  );
}
