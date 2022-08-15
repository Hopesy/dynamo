import{_ as n,o as e,c as s,e as i}from"./app.4258e646.js";const a={},l=i(`<h3 id="dynamo\u5E38\u7528\u8282\u70B9-\u907F\u514D\u9057\u5FD8" tabindex="-1"><a class="header-anchor" href="#dynamo\u5E38\u7528\u8282\u70B9-\u907F\u514D\u9057\u5FD8" aria-hidden="true">#</a> Dynamo\u5E38\u7528\u8282\u70B9\uFF0C\u907F\u514D\u9057\u5FD8</h3><blockquote><p>\u540E\u7EED\u7528\u5230\u4E86\u518D\u66F4\u65B0</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Element.Solid   //\u5C06\u623F\u95F4\uFF0C\u5899\u7B49\u8F6C\u5316\u4E3ADynamo\u5B9E\u4F53
Element.Geometry  //\u5C06Revit\u7684\u56FE\u5143\u8F6C\u5316\u4E3ADynamo\u7684\u51E0\u4F55\u56FE\u5F62\u4F8B\u5982\u9009\u53D6\u6A21\u578B\u7EBF\u540E\u63A5\u4E0A\u6B64\u8282\u70B9
Element.Curves  //\u5F97\u5230\u5143\u7D20\u7684\u66F2\u7EBF
Element.Faces   //\u53EF\u4EE5\u5C06Revit\u56FE\u5143\u7684\u5404\u4E2A\u9762\u53D6\u51FA\u6765
Element.BoundingBox   //\u53D6\u5F97\u56FE\u5143\u7684\u8FB9\u754C\u6846\uFF0C\u5E73\u884C\u4E8E\u9879\u76EEXYZ\u5750\u6807\u8F74\u5E76\u5B8C\u6574\u5305\u8986\u51E0\u4F55\u5F62\u4F53\u7684\u957F\u65B9\u4F53\uFF0C\u4F8B\u5982\u5899\u4F53\u6216\u65CF
Solid.Centorid  //\u5B9E\u4F53\u8D28\u5FC3
Geometry.BoundingBox  //\u56FE\u5143\u7684boundingBox,\u4F8B\u5982\u5B9E\u4F53\uFF0C\u66F2\u9762
BoundingBox.Contains //
RayBounce.ByOrigionDirection //\u4ECE\u8D77\u70B9\u6309\u7167\u5411\u91CF\u65B9\u5411\u53D1\u5C04\u4E00\u6761\u5149\u7EBF\uFF0C\u53EF\u4EE5\u89C4\u5B9A\u5149\u7EBF\u53CD\u5C04\u7684\u6B21\u6570
Element.Faces  //\u53EF\u4EE5\u83B7\u5F97\u5899\uFF0C\u697C\u68AF\u5B9E\u4F53\u7684\u5404\u4E2A\u9762
ImportInstance.ByGeometry //\u5C06\u51E0\u4F55\u56FE\u5F62\u53D8\u6210\u5BFC\u5165\u7B26\u53F7\u5BFC\u5165Revit\u4E2D
DirectShape.ByGeometry //\u8282\u70B9\u5728\u76F4\u63A5\u5BFC\u5165\u7684\u57FA\u7840\u4E0A\uFF0C\u53EF\u4EE5\u8F93\u5165\u5BFC\u5165\u540E\u7684\u65CF\u7C7B\u522B\u3001\u6750\u8D28\u548C\u65CF\u540D\u79F0\u3002
ModelCurve.ByCurve     //\u5BFC\u51FA\u6A21\u578B\u7EBF\u81F3Revit\u9879\u76EE\u6216\u8005\u65CF
ExportToSat         //\u5C06\u5B9E\u4F53\u6309\u7167\u6307\u5B9A\u8DEF\u5F84\u5BFC\u51FA\u5230Revit\u9879\u76EE\u6216\u8005\u65CF
Geometry.DistanceTo //\u83B7\u53D6\u51E0\u4F55\u56FE\u5F62\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u70B9\u7EBF\u9762\u4F53\u90FD\u53EF\u4EE5
Geometry.DoesIntersect //\u5224\u65AD\u4E24\u4E2A\u51E0\u4F55\u56FE\u5F62\u662F\u5426\u76F8\u4EA4
Geometry.Intersect    //\u83B7\u53D6\u76F8\u4EA4\u5B9E\u4F53\uFF0C\u5982\u679C\u8F93\u5165\u7684\u4E24\u7AEF\u662F\u66F2\u7EBF\u7684\u8BDD\uFF0C\u53EF\u4EE5\u83B7\u53D6\u4EA4\u70B9
BoundingBox.ToCuboid  //\u5C06\u8FB9\u754C\u6846\u8F6C\u6362\u4E3A\u957F\u65B9\u5F62\u5B9E\u4F53
BoundingBox.Intersects  //\u5224\u65ADBoundingBox\u662F\u5426\u76F8\u4EA4
FamilyIstance.ByPoint //\u6309\u7167\u6307\u5B9A\u5750\u6807\u70B9\u653E\u7F6E\u65CF
FamilyInstance.SetRotation //\u6309\u7167\u65CF\u7684\u9ED8\u8BA4\u65CB\u8F6C\u4E2D\u5FC3\u65CB\u8F6C\uFF0CArchi-lab\u8282\u70B9\u5305\u53EF\u8BBE\u7F6E\u5176\u65CB\u8F6C\u4E2D\u5FC3
FamilyInstance.FacingOrientation //\u53D6\u5F97\u56FE\u5143\u7684\u65B9\u5411\u5411\u91CF
Vector.AngleAboutAxis  //\u53D6\u5F97\u5411\u91CF\u4E0EXYZ\u8F74\u7684\u89D2\u5EA6
Surface.PointAtParameter //\u5C06\u4E00\u4E2A\u9762\u6309\u7167UV\u5212\u5206\u6210\u70B9<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">1</span><span class="token punctuation">)</span>
Math.RandomList  //\u751F\u6210\u968F\u673A\u6570\u5217
Point.Origion  //\u539F\u70B90,0,0
Curve.Project   //\u5C06\u66F2\u7EBF\u6309\u7167\u6307\u5B9A\u7684\u5411\u91CF\u6295\u5F71\u5230\u51E0\u4F55\u56FE\u5143\u4E0A
Surface.ProjectInputOnto  //\u5C06\u66F2\u9762\u6295\u5F71\u5230\u51E0\u4F55\u56FE\u5143\u4E0A
Helix.ByAxis   //\u6309\u7167\u65B9\u5411\uFF0C\u6307\u5B9A\u5468\u671F\u9AD8\u5EA6\uFF0C\u89D2\u5EA6\u521B\u5EFA\u87BA\u65CB\u7EBF
Curve.Extrude  //\u66F2\u7EBF\u5411\u67D0\u4E00\u4E2A\u65B9\u5411\u62C9\u4F38\u751F\u6210\u66F2\u9762
Surface.ByPatch //\u901A\u8FC7\u586B\u5145\u751F\u6210\u66F2\u9762\uFF0C\u4EC5\u9002\u5408\u4E8E\u95ED\u5408\u66F2\u7EBF
Surface.ByLoft //\u591A\u6761\u66F2\u7EBF\u6309\u7167\u987A\u5E8F\u653E\u6837\u751F\u6210
Surface.NormalAtParameter //\u901A\u8FC7UV\u83B7\u5F97\u66F2\u9762\u4E0A\u7684\u67D0\u4E2A\u70B9\u30100-1\u3011
Surface.NormalAtParameter //\u901A\u8FC7UV\u83B7\u5F97\u66F2\u9762\u4E0A\u67D0\u4E2A\u70B9\u7684\u6CD5\u5411\u91CF\u30100-1\u3011
Line.ByStartPointDirectionLength //\u901A\u8FC7\u70B9\uFF0C\u65B9\u5411\uFF0C\u957F\u5EA6\u521B\u5EFA\u7EBF\u6BB5
Surface.GetLsoLine  //\u83B7\u5F97\u66F2\u9762\u4E0AUV\u503C\u5BF9\u5E94\u7684\u66F2\u7EBF\uFF0Co\u83B7\u5F97U1\u83B7\u5F97V\u53C2\u6570<span class="token punctuation">[</span><span class="token number">0</span>-1<span class="token punctuation">]</span>
Surface.DivideSurfaceUV //\u901A\u8FC7uv\uFF08int\uFF09\u5206\u5272\u66F2\u9762
Excel.ReadFromFile  //File Path File.FromFile File \u914D\u5408\u4F7F\u7528
Math.Map  //\u5C06\u8F93\u5165\u6570\u7EC4\u6620\u5C04\u52300-1\uFF0C\u53EF\u4EE5\u63A7\u5236\u8F93\u5165\u6570\u636E\u7684\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C<span class="token operator">&gt;</span>max -<span class="token operator">&gt;</span><span class="token number">1</span>,<span class="token operator">&lt;</span>min -<span class="token operator">&gt;</span> <span class="token number">0</span>.
Math.RemapRange //\u5C06\u8F93\u5165\u6570\u7EC4\u6620\u5C04\u5230\u7ED9\u5B9A\u7684\u8303\u56F4
//code block \u53EF\u4EE5\u5B9A\u4E49\u51FD\u6570\uFF0C\u5B9A\u4E49\u4E4B\u540E\u53EF\u4EE5\u76F4\u63A5\u518D\u53E6\u4E00\u4E2Acode block\u4E2D\u6253\u51FD\u6570\u540D\u8C03\u7528
def createTest<span class="token punctuation">(</span>x,y<span class="token punctuation">)</span><span class="token punctuation">{</span>
r1 <span class="token operator">=</span> x+ y<span class="token punctuation">;</span>
p1 <span class="token operator">=</span> Point.ByCoordinates<span class="token punctuation">(</span>x,y<span class="token punctuation">)</span><span class="token punctuation">;</span>
c1 <span class="token operator">=</span>Circle.ByCenterPointRadius<span class="token punctuation">(</span>r1,p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token assign-left variable">return</span><span class="token operator">=</span>c1<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
//Category -<span class="token operator">&gt;</span> Family -<span class="token operator">&gt;</span> Type -<span class="token operator">&gt;</span> Instance
Grid.Curve //\u5C06\u8F74\u7F51\u8F6C\u5316\u4E3ADynamo\u53EF\u4EE5\u8BC6\u522B\u7684\u66F2\u7EBF
Dimension.ByElements   //\u521B\u5EFA\u5C3A\u5BF8\u6807\u6CE8
Element.OverridecolorInView  //\u66F4\u6539\u56FE\u5143\u5728\u89C6\u56FE\u4E2D\u663E\u793A\u7684\u989C\u8272
SunSettings.Current  //\u83B7\u53D6\u5F53\u524D\u7684\u65E5\u7167\u4FE1\u606F
SunSeettings.SunDirection //\u83B7\u53D6\u65E5\u5149\u65B9\u5411\uFF08\u5411\u91CF<span class="token punctuation">)</span>
Vector.AngleWithVector  //\u8BA1\u7B97\u4E24\u4E2A\u5411\u91CF\u4E4B\u95F4\u7684\u5939\u89D2
List.Map  //\u5C06\u51FD\u6570\u5373\u81EA\u5B9A\u4E49\u64CD\u4F5C\u4F8B\u5982\u53D6\u51FA\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E94\u7528\u4E8E\u5217\u8868\u6240\u6709\u6570\u636E
List.RemoveIfNot    //\u5220\u9664\u5217\u8868\u4E2D\u975E\u6307\u5B9A\u7C7B\u578B\u7684\u6210\u5458\uFF0C\u53EF\u4EE5\u7528\u6765\u7B5B\u9009\uFF0C\u6BD4\u5982\u4ECE\u7C7B\u522B\u89C6\u56FE\u4E2D\u7684\u6240\u6709\u89C6\u56FE\u4E2D\u53D6\u51FA\u697C\u5C42\u5E73\u9762
String.EndsWith  //\u786E\u5B9A\u5B57\u7B26\u4E32\u662F\u5426\u4EE5\u7ED9\u5B9A\u5B57\u7B26\u7ED3\u5C3E\uFF0C\u53EF\u4EE5\u7528\u6765\u7B5B\u9009\u7C7B\u578B\u540D\u79F0\u7B49
String.Replace  //\u66FF\u6362\u6307\u5B9A\u5B57\u7B26\u4E32
String.Length   //\u5B57\u7B26\u4E32\u7684\u957F\u5EA6
String.PadLeft  //\u901A\u8FC7\u5728\u5DE6\u4FA7\u586B\u5145\u6307\u5B9A\u5B57\u7B26\u4F8B\u5982\xB70\xB7\u662F\u5B57\u7B26\u4E32\u8FBE\u5230\u7EDF\u4E00\u957F\u5EA6
List.Flattern  //\u6570\u7EC4\u62CD\u5E73\u7684\u65F6\u5019\u4F1A\u81EA\u52A8\u53BB\u6389empty\u7A7A\u503C
Sequence //\u521B\u5EFA\u6570\u5B57\u961F\u5217
String from Object //\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32
List.SetIntersection//\u83B7\u53D6\u4EA4\u96C6\uFF0C\u4F8B\u5982ALL elements <span class="token keyword">in</span> ActiveView \u4E0EAll element of category \u83B7\u53D6\u5F53\u524D\u89C6\u56FE\u67D0\u4E00\u7C7B\u522B\u56FE\u5143
FamilyInstance.Location //\u83B7\u53D6\u65CF\u5B9E\u4F8B\u7684\u4F4D\u7F6E
List.GroupByKey  //\u6309\u7167\u5173\u952E\u5B57\u5C06\u5143\u7D20\u5206\u7EC4\uFF0C\u4F8B\u5982\u53EF\u4EE5\u6309\u7167\u70B9\u7684\u67D0\u4E2A\u5750\u6807\u503C\u5C06\u70B9\u5206\u7EC4
Geometry.ClosestPointTo //\u8BE5\u51E0\u4F55\u56FE\u5F62\u81F3\u5176\u4ED6\u51E0\u4F55\u56FE\u5F62\u6700\u8FD1\u7684\u70B9\uFF0C\u53EF\u4EE5\u662F\u70B9\u3001\u7EBF\u3001\u9762\u3001\u4F53
Select Model Element //\u9009\u53D6\u6A21\u578B\uFF0C\u4F8B\u5982\u6A21\u578B\u7EBF
Element.Geometry //\u53EF\u4EE5\u63A5\u5728\u6A21\u578B\u7EBF\u7684\u540E\u9762
List.IndexOf  //\u6570\u7EC4\u91CC\u9762\u67D0\u4E2A\u5143\u7D20\u7684index
List.RemoveAtIndex  //\u79FB\u9664\u6570\u7EC4\u67D0\u4E2Aindex\u7684\u5143\u7D20
Curve.SplitByPoints  //\u6839\u636E\u70B9\u5206\u5272\u66F2\u7EBF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dynamo\u7B2C\u4E09\u65B9\u8282\u70B9\u5305" tabindex="-1"><a class="header-anchor" href="#dynamo\u7B2C\u4E09\u65B9\u8282\u70B9\u5305" aria-hidden="true">#</a> Dynamo\u7B2C\u4E09\u65B9\u8282\u70B9\u5305</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable"><span class="token variable">\`</span>Spring Nodes<span class="token variable">\`</span></span>
Springs.FamilyInstance.ByFacePoints //\u6309\u7167\u9762\u6765\u653E\u7F6E\u56FE\u5143
<span class="token variable"><span class="token variable">\`</span>ClockWork<span class="token variable">\`</span></span>
Element.CopyByVector   //\u6309\u7167\u5411\u91CF\u590D\u5236\u56FE\u5143
WH_Curve.RemoveDuplicates //\u53BB\u9664\u91CD\u590D\u7684\u66F2\u7EBF<span class="token punctuation">(</span>\u8D77\u70B9\u7EC8\u70B9\u76F8\u53CD\u4E5F\u89C6\u4E3A\u540C\u4E00\u6761\u66F2\u7EBF<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[l];function r(c,d){return e(),s("div",null,t)}var v=n(a,[["render",r],["__file","node.html.vue"]]);export{v as default};
