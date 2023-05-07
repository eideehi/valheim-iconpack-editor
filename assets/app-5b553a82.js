const e={en:"英語 (English)",ja:"日本語"},a={caption:"Valheim IconPack Editorで使用されているライブラリのライセンス一覧",library:{name:"ライブラリ名",version:"バージョン",publisher:"パブリッシャー",license:"ライセンス条文"}},i={common:{"required-mark":"*",error:{required:"このフィールドは必須です。","invalid-text-format":"無効なフォーマットです。","unsupported-file-format":"サポートされていないファイル形式です。"}},"image-file":{"select-area":{"dnd-files-here-or":"ここにファイルをドロップ、または",browse:"ファイルを選択"},"image-data":{"sub-directory":"サブディレクトリ",filename:"ファイル名",width:"幅",height:"高さ"}}},n={languages:e,licenses:a,forms:i,"start-page":{overview:`## Valheim IconPack Editorとは?
----
Valheim IconPack Editor は Valheim の Mod **「[Automatics](https://github.com/eideehi/valheim-automatics)」** にて利用することができる、マップに表示されるピンのアイコンをカスタマイズするための[アイコンパック](https://github.com/eideehi/valheim-automatics/blob/main/docs/custom-icon-pack.adoc)を作成・編集するためのツールです。
### 注意事項
* 現在、レスポンシブなレイアウトに対応していません。1366x768以上の解像度のディスプレイでの利用をおすすめします。
* 現在、出力可能なアイコンパックのフォーマットはNexus Mods用のものだけです。Thunderstore用のアイコンパック出力機能は開発中です。`,"create-iconpack":{caption:"新しくアイコンパックを作成しますか？","iconpack-name":{label:"アイコンパックの名前",help:`# アイコンパックの名前
----
あなたのアイコンパックの名前を入力します。大文字と小文字のアルファベット、数字、アンダースコア、ドット、プラス、ハイフン、スペースを使用することが可能です。先頭と末尾のスペースは削除されることに注意してください。`},"create-iconpack":"アイコンパックを作成"},"load-iconpack":{description:"既存のアイコンパックを読み込みますか？","load-iconpack":"アイコンパックを読み込む","failed-to-load-iconpack":"アイコンパックの読み込みに失敗しました。"}},"iconpack-editor":{target:{label:"ターゲット",help:"# ターゲット\n----\n表示名、または内部名のどちらかを指定します。表示名とは`猪`などのゲーム中に実際に表示される文字列のことで、内部名は`$enemy_boar`などのゲームのプログラム内部で使用される文字列のことを言います。内部名は[Automaticsにより追加されるコマンド](https://github.com/eideehi/valheim-automatics#console-commands)の`printnames`を使用して取得することが出来ます。また、表示名と内部名のマッチングの違いについては[Automaticsのドキュメント](https://github.com/eideehi/valheim-automatics#matching-by-display-name-and-internal-name)を参照してください。"},level:{label:"レベル",help:`# レベル
----
動物やモンスターにのみ使用されます。それ以外のアイテムやロケーションなどには設定する必要はありません。この項目を設定することで、動物やモンスターのレベルごとに異なるアイコンを割り当てることが可能です。なお、星がついていない状態がレベル1となります。星1つはレベル2、星2つはレベル3です。`,placeholder:"省略された場合、すべてのレベルにマッチします"},icon:{label:"アイコン",help:`# アイコン
----
マップのピンに設定されるアイコンのファイルを設定します。アイコンはあまり大きくても邪魔になるだけなので、最大でも64x64くらいに収めたほうが良いでしょう。`},"hide-name-tag":{label:"ネームタグを非表示にする",help:`# ネームタグを非表示にする
----
マップに表示されるピンの名前を非表示にします。アイコンの画像だけで対象の詳細まで読み取れる場合、ネームタグは冗長となるため、このオプションが役に立つでしょう。`},"icon-scale-large-map":{label:"拡大マップでのアイコン表示倍率",help:`# 拡大マップでのアイコン表示倍率
----
拡大されたマップに表示されるアイコンの縮尺を設定します。拡大マップ上ではアイコンが32x32にリサイズされてしまいますが、この表示倍率を乗算することでアイコンの大きさを調整することが出来ます。アイコンの大きさが64x64の場合、表示倍率を2に設定することで拡大マップ上でも64x64で表示されるようになります。`},"icon-scale-small-map":{label:"ミニマップでのアイコン表示倍率",help:`# ミニマップでのアイコン表示倍率
----
ミニマップに表示されるアイコンの縮尺を設定します。ミニマップ上ではアイコンが16x16にリサイズされてしまいますが、この表示倍率を乗算することでアイコンの大きさを調整することが出来ます。アイコンの大きさが64x64の場合、表示倍率を4に設定することでミニマップ上でも64x64で表示されるようになります。`},"add-entry":"この内容を追加する","overwrite-entry":"編集内容を上書き保存する","delete-entry":"このエントリを削除する"},"json-view":{entry:{level:"レベル: {{level}}"}}};export{n as default,i as forms,e as languages,a as licenses};
