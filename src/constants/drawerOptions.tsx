import { COLORS } from "../utils/Colors";
import { SIZE } from "../utils/CommonStyles";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

export const options = [
  {
    id: 1,
    name: "timetable",
    title: "Update Timetable",
    icon: () => (
      <Octicons
        name="desktop-download"
        size={SIZE.base * 2}
        color={COLORS.white}
      />
    ),
  },
  {
    id: 2,
    name: "language",
    title: "Language",
    icon: () => (
      <Ionicons
        name="globe-outline"
        size={SIZE.base * 2}
        color={COLORS.white}
      />
    ),
  },
  {
    id: 3,
    name: "settings",
    title: "Settings",
    icon: () => (
      <Ionicons
        name="settings-sharp"
        size={SIZE.base * 2}
        color={COLORS.white}
      />
    ),
  },
  {
    id: 4,
    name: "share",
    title: "Share App",
    icon: () => (
      <Entypo name="share" size={SIZE.base * 2} color={COLORS.white} />
    ),
  },
  {
    id: 5,
    name: "rateus",
    title: "Rate Us",
    icon: () => (
      <Ionicons
        name="logo-google-playstore"
        size={SIZE.base * 2}
        color={COLORS.white}
      />
    ),
  },
  {
    id: 6,
    name: "reportissue",
    title: "Report Issue",
    icon: () => (
      <Ionicons name="bug" size={SIZE.base * 2} color={COLORS.white} />
    ),
  },
  {
    id: 7,
    name: "suggestfeature",
    title: "Suggest a feature",
    icon: () => (
      <MaterialCommunityIcons
        name="lightbulb-on-outline"
        size={SIZE.base * 2}
        color={COLORS.white}
      />
    ),
  },
];
