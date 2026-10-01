import {
  Activity, BarChart3, Bell, Bot, Boxes, Braces, Calendar, Cloud, Code2,
  Compass, CreditCard, Database, FileText, Filter, Gauge, GitBranch, Globe,
  Heart, Infinity as InfinityIcon, Layers, LineChart, Link2, Lock, Mail,
  MessageSquare, Palette, PenTool, Play, Plug, Puzzle, Rocket, Search, Send,
  Server, Settings, Share2, ShieldCheck, Smartphone, Sparkles, Star, Target,
  Terminal, Timer, TrendingUp, Users, Wallet, Wand2, Workflow, Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Constrained icon vocabulary.
 *
 * The copy model is told to pick from these names only, so a generated page can
 * never reference an icon that does not exist. Add a name here and to the
 * prompt's allowed list at the same time.
 */
export const ICONS: Record<string, LucideIcon> = {
  activity: Activity,
  "bar-chart": BarChart3,
  bell: Bell,
  bot: Bot,
  boxes: Boxes,
  braces: Braces,
  calendar: Calendar,
  cloud: Cloud,
  code: Code2,
  compass: Compass,
  "credit-card": CreditCard,
  database: Database,
  "file-text": FileText,
  filter: Filter,
  gauge: Gauge,
  "git-branch": GitBranch,
  globe: Globe,
  heart: Heart,
  infinity: InfinityIcon,
  layers: Layers,
  "line-chart": LineChart,
  link: Link2,
  lock: Lock,
  mail: Mail,
  message: MessageSquare,
  palette: Palette,
  "pen-tool": PenTool,
  play: Play,
  plug: Plug,
  puzzle: Puzzle,
  rocket: Rocket,
  search: Search,
  send: Send,
  server: Server,
  settings: Settings,
  share: Share2,
  "shield-check": ShieldCheck,
  smartphone: Smartphone,
  sparkles: Sparkles,
  star: Star,
  target: Target,
  terminal: Terminal,
  timer: Timer,
  "trending-up": TrendingUp,
  users: Users,
  wallet: Wallet,
  wand: Wand2,
  workflow: Workflow,
  zap: Zap,
};

export function resolveIcon(name: string): LucideIcon {
  return ICONS[name?.toLowerCase().trim()] ?? Sparkles;
}
