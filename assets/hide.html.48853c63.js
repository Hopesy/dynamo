import{_ as e,o as n,c as i,e as s}from"./app.4258e646.js";const a={},l=s(`<h1 id="dynamo\u9690\u85CF\u65CF\u5185\u90E8\u6784\u4EF6" tabindex="-1"><a class="header-anchor" href="#dynamo\u9690\u85CF\u65CF\u5185\u90E8\u6784\u4EF6" aria-hidden="true">#</a> Dynamo\u9690\u85CF\u65CF\u5185\u90E8\u6784\u4EF6</h1><blockquote><p>\u6838\u5FC3\u65B9\u6CD5\u5728\u65CF\u73AF\u5883\u4E0B\u4F7F\u7528view.UnhideElement\uFF08\uFF09\u548Cview.HideElement\uFF08\uFF09 \u6548\u679C\u662F\u65CF\u5185\u90E8\u6240\u6709\u89C6\u56FE\u5747\u770B\u4E0D\u5230\u56FE\u5143\uFF0C\u4F46\u662F\u65B0\u5EFA\u5E73\u9762\u6216\u8005\u5256\u9762\u4E0D\u53D7\u5F71\u54CD</p></blockquote><p><img src="https://cdn.nlark.com/yuque/0/2022/png/12420419/1650248981895-0069db0b-3f5e-46f2-8d8a-97d4404d2fc2.png#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;id=tNysj&amp;originHeight=585&amp;originWidth=733&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""><img src="https://cdn.nlark.com/yuque/0/2022/png/12420419/1650248981989-3d11dfe3-f1bf-4287-90dc-3c044f346443.png#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;id=cNHT7&amp;originHeight=544&amp;originWidth=628&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code># \u52A0\u8F7D Python Standard \u548C DesignScript \u5E93
import sys
sys.path.append(&#39;C:\\Program Files (x86)\\IronPython 2.7\\Lib&#39;)
import clr
clr.AddReference(&#39;ProtoGeometry&#39;)
from Autodesk.DesignScript.Geometry import *
clr.AddReference(&quot;System&quot;)
from System.Collections.Generic import List
# \u5BFC\u5165 RevitAPI \u548C RevitAPIUI
clr.AddReference(&quot;RevitAPI&quot;)
clr.AddReference(&quot;RevitAPIUI&quot;)
import Autodesk
from Autodesk.Revit.DB import *
from Autodesk.Revit.UI import *
clr.AddReference(&quot;RevitNodes&quot;)
import Revit
# \u5BFC\u5165\u51E0\u4F55\u4F53\u8F6C\u6362\u65B9\u6CD5
clr.ImportExtensions(Revit.GeometryConversion)
# \u5BFC\u5165\u5143\u7D20\u8F6C\u6362
clr.ImportExtensions(Revit.Elements)
# \u5BFC\u5165 DocumentManager \u548C TransactionManager
clr.AddReference(&quot;RevitServices&quot;)
import RevitServices
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager
doc = DocumentManager.Instance.CurrentDBDocument
uiapp = DocumentManager.Instance.CurrentUIApplication
app = uiapp.Application
uidoc = DocumentManager.Instance.CurrentUIApplication.ActiveUIDocument
lashen = ElementClassFilter(Extrusion)
# \u62C9\u4F38\u8FC7\u6EE4\u5668
ronghe= ElementClassFilter(Blend)
xuanzhuan=ElementClassFilter(Revolution)
fangyang=ElementClassFilter(Sweep)
fangyangronghe=ElementClassFilter(SweptBlend)
qiantao=ElementClassFilter(Instance)
orFilter =LogicalOrFilter(List[ElementFilter]([lashen,ronghe,xuanzhuan,fangyang,fangyangronghe,qiantao]))
all_gem=FilteredElementCollector(doc).WherePasses(orFilter).ToElements()
element = all_gem
#\u9009\u62E9\u89C6\u56FE\u4E2D\u7684\u6784\u4EF6\uFF0C\u540E\u9762\u76F4\u63A5\u5FAA\u73AF\u8FC7\u6EE4\u51FA\u6240\u6709\u89C6\u56FE\u4E2D\u7684\u6784\u4EF6
state = IN[0]
success = []
fail = []
#\u5B9A\u4E49\u72B6\u6001
for i in element:
    elemIds = []
    elemIds.append(i.Id)
    #\u83B7\u53D6\u9009\u62E9\u6784\u4EF6\u7684ID
    ids = List[ElementId](elemIds)
    if state == True :
       try:
          TransactionManager.Instance.EnsureInTransaction(doc)
          doc.ActiveView.HideElements(ids)
          TransactionManager.Instance.TransactionTaskDone()
          success.append(i)
       except:
          fail.append(i)
    else :
        try:
          TransactionManager.Instance.EnsureInTransaction(doc)
          doc.ActiveView.UnhideElements(ids)
          TransactionManager.Instance.TransactionTaskDone()
          success.append(i)
        except:
          fail.append(i)
TaskDialog.Show(&quot;Hide&quot;,&quot;success&quot;)
OUT = success,fail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[l];function r(t,c){return n(),i("div",null,d)}var m=e(a,[["render",r],["__file","hide.html.vue"]]);export{m as default};
