import {
  getChipColor,
  getChipBackground,
  getAvatar,
  getPlural,
} from './helpers';
import { customOrange, customGreen, customRed } from '../helpers/useStyles';

test('getChipColor should return correct colors', () => {
  expect(getChipColor('warn')).toEqual('black');
  expect(getChipColor('error')).toEqual('white');
  expect(getChipColor('status')).toEqual('white');
});

test('getChipBackground should return correct colors', () => {
  expect(getChipBackground('warn')).toEqual(customOrange);
  expect(getChipBackground('status')).toEqual(customGreen);
  expect(getChipBackground('error')).toEqual(customRed);
});

test('getAvatar should return word with capital first letter', () => {
  expect(getAvatar('warn')).toEqual('W');
});

test('getPlural should return message or message depending on state', () => {
  expect(getPlural([1, 2, 3])).toEqual('messages');
  expect(getPlural([1])).toEqual('message');
});
