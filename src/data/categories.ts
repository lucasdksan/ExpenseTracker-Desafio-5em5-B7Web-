import { Category } from "../types/Category";
import { colors } from "../styles/themes/colors"

export const categories: Category = {
    food: {
        title: "Alimentação",
        color: colors.main_blue,
        expense: true,
    },
    rent: {
        title: "Aluguel",
        color: colors.main_brown,
        expense: true,
    },
    salary: {
        title: "Salário",
        color: colors.main_green,
        expense: false,
    } 
}