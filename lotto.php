<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" h href="<?php echo get_template_directory_uri(); ?>/less/index.css"/>
</head>
<body>
<div class="header">
    <div class="full-wrap">
        <h1>购彩中心</h1>
    </div>
    <div class="menu">
        <div class="full-wrap">
            <a href="#">首页</a>
            <a href="#" class="active">购彩中心</a>
            <a class="account" href="#">我的彩票</a>
        </div>
    </div>
</div>
<div class="main">
<div class="full-wrap lotto-detail">
<div class="content">
<div class="lotto-title" style="background-image: url(<?php echo get_template_directory_uri(); ?>/resource/lotto-ssc/ssc-title.png);">
    <p><span>第</span><em>20140613046</em><span>期</span></p>
</div>
<div class="lotto-select">
    <div class="tab">
        <a href="#" class="active">五星</a>
        <a href="#">四星</a>
        <a href="#">三星</a>
        <a href="#">二星</a>
        <a href="#">一星</a>
    </div>
    <div class="step step-1">
        <h4>第一步: 选择号码<span class="countdown">离新开期还剩： <em>01分30秒</em></span></h4>

        <div class="select-type">
            <label class="type-check" for="type-7"><input type="radio" checked="checked" name="star5"
                                                          id="type-7">直选</label>
            <label class="type-check" for="type-8"><input type="radio" name="star5" id="type-8">普选</label>
        </div>
        <div class="desc">提示：从个、十、百、千、万位各选1个或多个号码，所选号码与开奖号码一一对应，即为中奖，2元一注，单注奖金116000元</div>
        <div class="select-area">
            <div class="select-row clearfix">
                <div class="indicate">
                    <span class="cp-digit">万 位</span>
                    <span class="cp-tip" title="[当前遗漏] 指该号码自上次开出之后没有出现的次数">当前遗漏</span>
                </div>
                <div class="select-main">
                    <ul class="balls clearfix">
                        <li><span class="cb">0</span><em>4</em></li>
                        <li><span class="cb">1</span><em>12</em></li>
                        <li><span class="cb">2</span><em>3</em></li>
                        <li><span class="cb">3</span><em>19</em></li>
                        <li><span class="cb">4</span><em>0</em></li>
                        <li><span class="cb">5</span><em>2</em></li>
                        <li><span class="cb">6</span><em>9</em></li>
                        <li><span class="cb">7</span><em>5</em></li>
                        <li><span class="cb">8</span><em class="red">40</em></li>
                        <li><span class="cb">9</span><em>1</em></li>
                    </ul>

                </div>
                <div class="help">
                    <input type="button" value="全" class="btn-org">
                    <input type="button" value="大" class="btn-org">
                    <input type="button" value="小" class="btn-org">
                    <input type="button" value="奇" class="btn-org">
                    <input type="button" value="偶" class="btn-org">
                    <input type="button" value="清空" class="btn-clear">
                </div>
            </div>
            <div class="select-row clearfix">
                <div class="indicate">
                    <span class="cp-digit">千 位</span>
                    <span class="cp-tip" title="[当前遗漏] 指该号码自上次开出之后没有出现的次数">当前遗漏</span>
                </div>
                <div class="select-main">
                    <ul class="balls clearfix">
                        <li><span class="cb">0</span><em>4</em></li>
                        <li><span class="cb">1</span><em>12</em></li>
                        <li><span class="cb">2</span><em>3</em></li>
                        <li><span class="cb">3</span><em>19</em></li>
                        <li><span class="cb">4</span><em>0</em></li>
                        <li><span class="cb">5</span><em>2</em></li>
                        <li><span class="cb">6</span><em>9</em></li>
                        <li><span class="cb">7</span><em>5</em></li>
                        <li><span class="cb">8</span><em class="red">40</em></li>
                        <li><span class="cb">9</span><em>1</em></li>
                    </ul>

                </div>
                <div class="help">
                    <input type="button" value="全" class="btn-org">
                    <input type="button" value="大" class="btn-org">
                    <input type="button" value="小" class="btn-org">
                    <input type="button" value="奇" class="btn-org">
                    <input type="button" value="偶" class="btn-org">
                    <input type="button" value="清空" class="btn-clear">
                </div>
            </div>
            <div class="select-option">
                <p class="select-tip">
                    您一共选中了 <span class="num">0</span> 注 ，共 <span class="money">0</span> 元
                </p>

                <div class="select-confirm">
                    <button type="button" class="btn btn-primary">添加到投注列表</button>
                </div>
            </div>
        </div>
    </div>
    <div class="step step-2">
        <h4>第二步: 确认投注</h4>
        <div class="confirm-submit">
            <div class="item">

            </div>
        </div>
    </div>
</div>
<div class="reward">
    <h2>奖级说明</h2>

    <div class="mc">
        <table cellspacing="0" cellpadding="0">
            <tbody align="center">
            <tr>
                <th width="85">玩法</th>
                <th width="125">开奖号码示例</th>
                <th width="165">投注号码示例</th>
                <th>中奖规则</th>
                <th width="100">单注奖金</th>
            </tr>
            <tr>
                <td>五星直选</td>
                <td rowspan="11">1 2 3 4 5</td>
                <td>1 2 3 4 5</td>
                <td align="left">选5个号码，与开奖号码完全按位全部相符</td>
                <td><span class="red">116000元</span></td>
            </tr>
            <tr>
                <td rowspan="3">五星通选</td>
                <td>1 2 3 4 5</td>
                <td align="left">选5个号码，与开奖号码完全按位全部相符</td>
                <td><span class="red">20460元</span></td>
            </tr>
            <tr>
                <td>1 2 3 * *或* * 3 4 5</td>
                <td align="left">选5个号码，与开奖号码前三位或后三位按位相符</td>
                <td><span class="red">200元</span></td>
            </tr>
            <tr>
                <td>1 2 * * *或* * * 4 5</td>
                <td align="left">选5个号码，与开奖号码前二位或后二位按位相符</td>
                <td><span class="red">30元</span></td>
            </tr>
            <tr>
                <td rowspan="2">四星</td>
                <td>- 2 3 4 5</td>
                <td align="left">选4个号码，与开奖号码连续后四位按位相符</td>
                <td><span class="red">10000元</span></td>
            </tr>
            <tr>
                <td>- 2 3 4 *或- * 3 4 5</td>
                <td align="left">选4个号码，与开奖号码连续前三位或后三位按位相符</td>
                <td><span class="red">88元</span></td>
            </tr>
            <tr>
                <td>三星</td>
                <td>- - 3 4 5</td>
                <td align="left">选3个号码，与开奖号码连续后三位按位相符</td>
                <td><span class="red">1160元</span></td>
            </tr>
            <tr>
                <td>二星直选</td>
                <td>- - - 4 5</td>
                <td align="left">选2个号码，与开奖号码连续后二位按位相符</td>
                <td><span class="red">116元</span></td>
            </tr>
            <tr>
                <td>二星组选</td>
                <td>- - - 4 5或- - - 5 4</td>
                <td align="left">选2个号码，与开奖号码连续后二位相符</td>
                <td><span class="red">58元</span></td>
            </tr>
            <tr>
                <td>一星</td>
                <td>- - - - 5</td>
                <td>选1个号码，与开奖号码个位相符</td>
                <td><span class="red">11元</span></td>
            </tr>
            <tr>
                <td>大小单双</td>
                <td>双单(或双大、小单、小大)</td>
                <td align="left">与开奖号码后二位数字属性按位相符</td>
                <td><span class="red">4元</span></td>
            </tr>
            <tr>
                <td>三星组三</td>
                <td>1 2 3 5 3</td>
                <td>- - 3 3 5</td>
                <td align="left">选两个号码，与开奖号码连续后三位相符</td>
                <td><span class="red">385元</span></td>
            </tr>
            <tr>
                <td>三星组六</td>
                <td rowspan="6">1 2 3 4 5</td>
                <td>- - 3 4 5</td>
                <td align="left">选三个号码，与开奖号码连续后三位相符(顺序不限)</td>
                <td><span class="red">190元</span></td>
            </tr>
            <tr>
                <td>任选一</td>
                <td>- 2 - - -或- - 3 - -</td>
                <td align="left">任选一个位置的号码投注与对应的开奖号码位置相符</td>
                <td><span class="red">11元</span></td>
            </tr>
            <tr>
                <td>任选二</td>
                <td>- - - 4 5或1 - 3 - -</td>
                <td align="left">任选两个位置的号码投注与对应的开奖号码位置相符</td>
                <td><span class="red">116元</span></td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
</div>
</div>
</div>
<div class="footer-menu">
    <div class="full-wrap clearfix">
        <h2>在淘宝买彩票、交易安全、购买便捷、领奖方便</h2>
        <ul>
            <li>
                <dl>
                    <dt>购彩流程</dt>
                    <dd><a href="#" target="_blank">注册身份信息</a></dd>
                    <dd><a href="#" target="_blank">投注和付款</a>
                    </dd>
                    <dd><a href="#" target="_blank">查看订单</a></dd>
                    <dd><a href="#" target="_blank">领奖与兑奖</a>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>支付方式</dt>
                    <dd><a href="#" target="_blank">网上银行支付</a></dd>
                    <dd><a href="#" target="_blank">快捷支付</a></dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>帮助与支持</dt>
                    <dd>
                        <a href="#" target="_blank">帮助中心</a></dd>
                    <dd>
                        <a href="#" target="_blank">常见问题</a></dd>
                    <dd><a href="#" target="_blank">意见及建议</a></dd>
                    <dd><a href="#" target="_blank">大奖领取流程</a>
                    </dd>
                </dl>
            </li>
            <li class="phone">
                <dl>
                    <dt></dt>
                    <dd>客服电话</dd>
                    <dd>0592-22222222</dd>
                </dl>
            </li>
        </ul>
    </div>
</div>
</body>
</html>