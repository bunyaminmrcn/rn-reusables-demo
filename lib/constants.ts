import { Lib } from '@rnr/reusables';

export const { NAV_THEME } = Lib;

export const COMPONENTS = [
  'accordion',
  'alert',
  'alert-dialog',
  'aspect-ratio',
  'avatar',
  'badge',
  'bottom-sheet',
  'button',
  'calendar',
  'card',
  'checkbox',
  'combobox',
  'collapsible',
  'command',
  'context-menu',
  'data-table',
  'date-picker',
  'dialog',
  'dropdown-menu',
  'form',
  'hover-card',
  'input',
  'label',
  'material-top-tabs',
  'menubar',
  'navigation-menu',
  'popover',
  'progress',
  'radio-group',
  'select',
  'separator',
  'skeleton',
  'slider',
  'switch',
  'table',
  'tabs',
  'textarea',
  'toast',
  'toggle',
  'toggle-group',
  'toolbar',
  'tooltip',
  'typography',
];

export const PRIMITIVES = [
  'accordion',
  'alert-dialog',
  'aspect-ratio',
  'avatar',
  'checkbox',
  'collapsible',
  'context-menu',
  'dialog',
  'dropdown-menu',
  'hover-card',
  'label',
  'menubar',
  'navigation-menu',
  'popover',
  'portal',
  'progress',
  'radio-group',
  'select',
  'separator',
  'slider',
  'switch',
  'table',
  'tabs',
  'toast',
  'toggle',
  'toggle-group',
  'toolbar',
  'tooltip',
];

//import { lazy } from 'react';


import AccordionScreen from '../app/accordion';
import AlertScreen from '../app/alert';
import AlertDialogScreen from '../app/alert-dialog';
import AspectRatioScreen from '../app/aspect-ratio';
import AvatarScreen from '../app/avatar';
import BadgeScreen from '../app/badge';
import BottomSheetScreen from '../app/bottom-sheet';
import ButtonScreen from '../app/button';
import CalendarScreen from '../app/calendar';
import CardScreen from '../app/card';
import CheckboxScreen from '../app/checkbox';
import ComboboxScreen from '../app/combobox';
import CollapsibleScreen from '../app/collapsible';
import CommandScreen from '../app/command';
import ContextScreen from '../app/context-menu';
import DataTableScreen from '../app/data-table';
import DatePickerScreen from '../app/date-picker';
import DialogScreen from '../app/dialog';
import DropdownMenuScreen from '../app/dropdown-menu';
import FormScreen from '../app/form';
import HoverCardScreen from '../app/hover-card';
import InputScreen from '../app/input';
import LabelScreen from '../app/label';
import MaterialTopTabsLayoutScreen from '../app/material-top-tabs/_layout';
import MenubarScreen from '../app/menubar';
import PopoverScreen from '../app/popover';
import NavigationMenuScreen from '../app/navigation-menu';
import ProgressScreen from '../app/progress';
import RadioGroupScreen from '../app/radio-group';
import SelectScreen from '../app/select';
import SeparatorScreen from '../app/separator';
import SkeletonScreen from '../app/skeleton';
import SliderScreen from '../app/slider/index';
import SwitchScreen from '../app/switch';
import TableScreen from '../app/table';
import TabsLayoutScreen from '../app/tabs/_layout';
import TextAreaScreen from '../app/textarea';
import ToastScreen from '../app/toast/index';
import ToogleScreen from '../app/toggle';
import ToggleGroupScreen from '../app/toggle-group';
import ToolbarScreen from '../app/toolbar/index';
import TooltipScreen from '../app/tooltip';
import TypographyScreen from '../app/typography';

export const COMPONENTS_R = [
  { name: 'accordion', mod: AccordionScreen },
  { name: 'alert', mod: AlertScreen },
  { name: 'alert-dialog', mod: AlertDialogScreen },

  { name: 'aspect-ratio', mod: AspectRatioScreen },
  { name: 'avatar', mod: AvatarScreen },
  { name: 'badge', mod: BadgeScreen },

  { name: 'bottom-sheet', mod: BottomSheetScreen },
  { name: 'button', mod: ButtonScreen },
  { name: 'calendar', mod: CalendarScreen },

  { name: 'card', mod: CardScreen },
  { name: 'checkbox', mod: CheckboxScreen },
  { name: 'combobox', mod: ComboboxScreen },

  { name: 'collapsible', mod: CollapsibleScreen },
  { name: 'command', mod: CommandScreen },
  { name: 'context-menu', mod: ContextScreen },

  { name: 'data-table', mod: DataTableScreen },
  { name: 'date-picker', mod: DatePickerScreen },
  { name: 'dialog', mod: DialogScreen },

  { name: 'dropdown-menu', mod: DropdownMenuScreen },
  { name: 'form', mod: FormScreen },
  { name: 'hover-card', mod: HoverCardScreen },

  { name: 'input', mod: InputScreen },
  { name: 'label', mod: LabelScreen },
  { name: 'material-top-tabs', mod: MaterialTopTabsLayoutScreen },

  { name: 'menubar', mod: MenubarScreen },
  { name: 'navigation-menu', mod: NavigationMenuScreen },
  { name: 'popover', mod: PopoverScreen },

  { name: 'progress', mod: ProgressScreen },
  { name: 'radio-group', mod: RadioGroupScreen },
  { name: 'select', mod: SelectScreen },

  { name: 'separator', mod: SeparatorScreen },
  { name: 'skeleton', mod: SkeletonScreen },
  { name: 'slider', mod: SliderScreen },

  { name: 'switch', mod: SwitchScreen },
  { name: 'table', mod: TableScreen },

  { name: 'tabs', mod: TabsLayoutScreen },
  //{ name: 'test', mod: lazy(() => import('../app/test')) },
  { name: 'textarea', mod: TextAreaScreen },

  { name: 'toast', mod: ToastScreen },
  { name: 'toggle', mod: ToogleScreen },
  { name: 'toggle-group', mod: ToggleGroupScreen },

  { name: 'toolbar', mod: ToolbarScreen },
  { name: 'tooltip', mod: TooltipScreen },
  { name: 'typography', mod: TypographyScreen }
];