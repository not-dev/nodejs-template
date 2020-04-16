import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
declare const module: {
    entry: {
        budle: string;
    };
    resolve: {
        extensions: string[];
    };
    output: {
        filename: string;
        path: string;
    };
    module: {
        rules: {
            test: RegExp;
            use: string;
            exclude: RegExp;
        }[];
    };
    plugins: (HtmlWebpackPlugin | CleanWebpackPlugin)[];
};
export default module;
