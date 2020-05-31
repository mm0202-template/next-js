# Next.js Template
## 構成
### ベース
[TypeScript Next.js example](https://github.com/vercel/next.js/tree/canary/examples/with-typescript)

### プロジェクトルート
`~`をプロジェクトルートに設定。

※ `tsconfig.json`と`jest.config.json`で指定

### 環境変数
* [Environment Variables | Next.js](https://nextjs.org/docs/basic-features/environment-variables)
* [解説ページ(準備中)]()

## テスト
### Jest
```shell script
# カバレッジなし
yarn run test

# カバレッジあり
yarn run test:coverage
```

## フォーマット
### ESLint
```shell script
# fixオプションなし
yarn run lint

# fixオプションあり
yarn run lint:fix
```
`pre-push`で`lint`自動実行

プッシュに失敗したら、`yarn run lints:fix`で修正して、再プッシュ

### Prettier
ESLintと連携

### sytlelint
```shell script
# fixオプションなし
yarn run sytlelint

# fixオプションあり
yarn run sytlelint:fix
```
`pre-push`で`sytlelint`自動実行

プッシュに失敗したら、`yarn run lints:fix`で修正して、再プッシュ

### editorconfig
ESLint、Prettier、sytlelintの設定に合わせて随時調整

### fix all
```shell script
yarn run lints:fix
```

## ビルド & デプロイ
### export
```shell script
yarn run build
yarn run export
```

### Netlify公開用のビルドワークフロー
詳細は以下の記事参照

[Netlify 向けデプロイテンプレートの中身を解説！](https://mmll.hatenablog.com/entry/category/services/netlify/template-deploy-to-netlify-source-code)

※ ビルド工程など、上記の記事から一部調整

## ログ
### Sentry
環境変数`NEXT_PUBLIC_SENTRY_DSN`に対象SentryプロジェクトのDSNの値を設定。

ローカル環境なら`.env.development.local`などで定義。

デプロイ環境ならSecretで定義。


# README from TypeScript Next.js example

This is a really simple project that shows the usage of Next.js with TypeScript.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-typescript)

## How to use it?

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npm init next-app --example with-typescript with-typescript-app
# or
yarn create next-app --example with-typescript with-typescript-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/vercel/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-typescript
cd with-typescript
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
