import { getContent, saveContent, getAllContent, resetAllContent } from './content';

export function getImageUrl(key) {
  return getContent(key);
}

export function saveImageUrl(key, url) {
  saveContent(key, url);
}

export function getAllImages() {
  return getAllContent();
}

export function resetAllImages() {
  resetAllContent();
}
