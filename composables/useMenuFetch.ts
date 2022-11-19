export const useMenuContent = () => useState<object>('menuContent', () => ({}));
export const useMenuSource = () => useState<string>('menuSource', () => '');

/* usePageFetch - Fetches content from sources. */
/* Currently only storyblok. */
export const useMenuFetch = async () => {
  console.log("this is the menu fetch");
  await useStoryblokMenuFetch();
};
