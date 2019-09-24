import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"
import createStyledComponentsTransformer from "typescript-plugin-styled-components"

export default async ({ config }: any) => {
    config.module.rules = [
        ...config.module.rules,
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                    options: {
                        getCustomTransformers: () => ({
                            before: [createStyledComponentsTransformer()],
                        }),
                    },
                },
                {
                    loader: "react-docgen-typescript-loader",
                    options: {
                        skipPropsWithName: ["as", "theme"],
                    },
                },
            ],
        },
    ]
    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".tsx"]
    config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin(),
    ]
    return config
}
