# Next.js Template
## 構成
### ベース
[TypeScript Next.js example](https://github.com/vercel/next.js/tree/canary/examples/with-typescript)

### プロジェクトルート
`~`をプロジェクトルートに設定。

※ `tsconfig.json`と`jest.config.json`で指定

### 環境変数
以下のページを参照してください。

* [【Next.js】環境変数(.env)の使い方【公式ドキュメント 意訳】](https://mmll.hatenablog.com/entry/category/tools/next-js/next-js-env-usage)
* [Environment Variables | Next.js](https://nextjs.org/docs/basic-features/environment-variables)

### デプロイ設定
#### Cypressを使用する場合
##### レコード機能を使用する場合
`GitHubリポジトリページ > Settings > Secrets`で、以下の２つのsecretを追加してください。

* `CYPRESS_PROJECT_ID`
* `CYPRESS_RECORD_KEY`

「Project ID」と「Record Key」は `Cypress ダッシュボード > 対象プロジェクト > Project settings` から取得可能。

`cypress.json` で `projectID` を設定している場合はテストランナーの Settings ページからも確認可能。

より詳細な内容は以下参照。

[公式ドキュメント Projects#Identification](https://docs.cypress.io/guides/dashboard/projects.html#Identification)

##### レコード機能を使用しない場合
各ワークフローのcypress使用部分から、`--record`フラグを削除してください。

※ 2020/06/01時点では、`staging`と`production`ワークフローで`--record`フラグを使用。

#### Cypressを使用しない場合
各ワークフローから、cypress使用部分をコメントアウト、または削除してください。

## テスト
### Jest
```shell script
# カバレッジなし
yarn test

# カバレッジあり
yarn test:coverage
```

### Cypress
```shell script
# テストランナーの起動
yarn cypress:open

# テストの実行
yarn cypress run
```

※ テスト実施前にアプリの起動が必要です。


## フォーマット
### ESLint
```shell script
# fixオプションなし
yarn lint

# fixオプションあり
yarn lint:fix
```
`pre-push`で`lint`自動実行

プッシュに失敗したら、`yarn lints:fix`で修正して、再プッシュ

### Prettier
ESLintと連携

### stylelint
```shell script
# fixオプションなし
yarn stylelint

# fixオプションあり
yarn stylelint:fix
```
`pre-push`で`sytlelint`自動実行

プッシュに失敗したら、`yarn lints:fix`で修正して、再プッシュ

### editorconfig
ESLint、Prettier、sytlelintの設定に合わせて随時調整

### fix all
```shell script
yarn lints:fix
```

## ビルド & デプロイ
### export
```shell script
yarn build
yarn export
```

### Netlify公開用のビルドワークフロー
詳細は以下の記事参照

[Netlify 向けデプロイテンプレートの中身を解説！](https://mmll.hatenablog.com/entry/category/services/netlify/template-deploy-to-netlify-source-code)

※ ビルド工程など、上記の記事から一部調整

## ログ
### Sentry
環境変数`NEXT_PUBLIC_SENTRY_DSN`に対象SentryプロジェクトのDSNの値を設定。

ローカル環境では`.env.development.local`などで定義。

デプロイ環境では、Secretなどで定義。


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
