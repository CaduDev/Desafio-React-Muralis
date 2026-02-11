export interface DashboardUserProps {
  id: number | null;
  name?: string;
  surname?: string;
  fullname?: string;
  email?: string;
  avatar: {
    thumb?: string;
    original?: string;
  } | null;
}
