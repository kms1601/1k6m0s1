import { create } from 'zustand'

interface CategoryType {
  category: string;
}

interface CategoryState {
  category: CategoryType;
}

interface CategoryActions {
  setCategory: (category: CategoryType) => void;
}

const defaultState = { category: "All" };

const useCategory  = create<CategoryState & CategoryActions>((set) => ({
  category: defaultState,
  setCategory: (category: CategoryType) => {set({ category })},
}));

export default useCategory;