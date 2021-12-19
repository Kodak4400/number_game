# number_game
Vue3を学ぶための数字ゲームです。

## 使用技術

- Vite
- Vue 3 Composition API 
- TypeScript
- ~~Storybook~~ <- 重すぎて使えない。
- nes.css
- Jest + Vue Test Utils
- Prettier
- ESLint
- tfenv
- Terrafore

## 課題
Vite + Storybookを使用しようとすると非常に重いので、Storybookを使用しない。  

原因は不明。  
そもそもStorybookのHTML自体が重い。（PCが原因？）

## Jest + Vue Test Utils
Vue Test Utilsを使用するには、[vue-jest](https://github.com/vuejs/vue-jest)をインストールする必要がある。  
README.mdにも記載してあるが、こいつを使用する際、バージョンに気をつけないといけないので、注意が必要。  

## Vue Component設計
SOLID原則に則る。  


 - 単一責任の原則: Componentは単一の責任を持つ。1つのことにのみ責任を持ち、それ以外のことは責任を持たない。
 - スタイルクローズドの法則: 子は親、親は子のスタイルを知ってはならない。

## Terraform
cd terraform
gcloud auth login
terraform init
terraform plan
terraform apply
terraform destroy
