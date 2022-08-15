import{_ as l,o as s,c as r,a as e,b as d,e as i,d as c,r as t}from"./app.4258e646.js";const a={},o=i('<h1 id="dynamo\u5904\u7406\u7B80\u5355excel" tabindex="-1"><a class="header-anchor" href="#dynamo\u5904\u7406\u7B80\u5355excel" aria-hidden="true">#</a> Dynamo\u5904\u7406\u7B80\u5355Excel</h1><h2 id="_1-\u4F7F\u7528\u8282\u70B9\u5305" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528\u8282\u70B9\u5305" aria-hidden="true">#</a> 1.\u4F7F\u7528\u8282\u70B9\u5305</h2><blockquote><p>Bumblebee</p></blockquote><h2 id="_2-\u4F7F\u7528python\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528python\u6A21\u5757" aria-hidden="true">#</a> 2.\u4F7F\u7528Python\u6A21\u5757</h2><blockquote><p>\u7531\u4E8EDynamo2.10\u4EE5\u4E0B\u7248\u672C\u53EA\u652F\u6301IronPython\uFF0C\u4E0D\u652F\u6301\u5E38\u7528\u7684\u5904\u7406Excel\u7684\u6A21\u5757xlrd,xlwt,xlutils,openpyxl,xlsxwriter\u3002\u6240\u4EE5\u4F4E\u7248\u672C\u6211\u4EEC\u53EA\u80FD\u4F7F\u7528<strong>Microsoft.Office.Interop.Excel</strong></p></blockquote>',5),v={href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.office.interop.excel?redirectedfrom=MSDN&view=excel-pia",target:"_blank",rel:"noopener noreferrer"},u=c("https://docs.microsoft.com/en-us/dotnet/api/microsoft.office.interop.excel?redirectedfrom=MSDN&view=excel-pia"),m=i(`<h3 id="_2-1\u8BFB\u53D6excel" tabindex="-1"><a class="header-anchor" href="#_2-1\u8BFB\u53D6excel" aria-hidden="true">#</a> 2.1\u8BFB\u53D6Excel</h3><blockquote><p>\u548CData.ImportExcel\u8282\u70B9\u7528\u6CD5\u4E00\u6837</p></blockquote><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>import clr
import sys
import System
from System import Array
from System.Collections.Generic import *
#\u5F15\u5165Microsoft.Office.Interop.Excel.dll\u6A21\u5757
clr.AddReferenceByName(&#39;Microsoft.Office.Interop.Excel, Version=11.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c&#39;)
from Microsoft.Office.Interop import Excel
System.Threading.Thread.CurrentThread.CurrentCulture = System.Globalization.CultureInfo(&quot;en-US&quot;)
from System.Runtime.InteropServices import Marshal
def fun(col_int):#\u6570\u5B57\u8F6C\u6362\u6210Excel\u5217\u53F7
    list1=[&#39;A&#39;,&#39;B&#39;,&#39;C&#39;,&#39;D&#39;,&#39;E&#39;,&#39;F&#39;,&#39;G&#39;,&#39;H&#39;,&#39;I&#39;,
           &#39;J&#39;,&#39;K&#39;,&#39;L&#39;,&#39;M&#39;,&#39;N&#39;,&#39;O&#39;,&#39;P&#39;,&#39;Q&#39;,&#39;R&#39;,
           &#39;S&#39;,&#39;T&#39;,&#39;U&#39;,&#39;V&#39;,&#39;W&#39;,&#39;X&#39;,&#39;Y&#39;,&#39;Z&#39;]
    col_str=&#39;&#39;
    if(col_int&lt;=26):
        col_str=list1[col_int-1]
    elif(col_int &lt; 702):
        col_int=col_int-27
        col_str=list1[int(col_int/26)]+list1[int(col_int%26)]
    elif(col_int==702):
        col_str=&#39;ZZ&#39;
    else:
        col_int=col_int-703
        col_str=list1[int(col_int/676)]+list1[int(col_int/26)%26]+list1[col_int%26]
    return(col_str)
file = IN[0]
#\u6253\u5F00Excel\u5E94\u7528\u7A0B\u5E8F
excel = Excel.ApplicationClass()
bool = IN[2] #Excel\u662F\u5426\u53EF\u89C1
excel.Visible = bool
wb = excel.Workbooks.Open(file)
#\u8F93\u5165\u8981\u6253\u5F00\u7684Excel\u5DE5\u4F5C\u8868\u540D\u79F0
sheetName = IN[1]
ws = wb.Worksheets[sheetName]
#\u83B7\u53D6Excel\u7684\u603B\u884C\u6570\u548C\u5217\u6570
totalColumns = ws.UsedRange.Columns.Count
totalRows = ws.UsedRange.Rows.Count
x = (fun(totalColumns))
data = []
for i in range(totalRows):
  x1range = ws.Range(&quot;A&quot;+str(i+1),str(x)+str(i+1))   #\u8BFB\u53D6\u67D0\u4E00\u884C\u7684\u5185\u5BB9
  r1 = x1range.Value2
  data.append(r1)
  i += 1
OUT = data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2\u5199\u5165excel\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_2-2\u5199\u5165excel\u5185\u5BB9" aria-hidden="true">#</a> 2.2\u5199\u5165Excel\u5185\u5BB9</h3><blockquote><p>\u548CData.ExportExcel\u7528\u6CD5\u4E00\u6837</p></blockquote><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>import clr
import sys
import System
from System import Array
from System.Collections.Generic import *
#\u5F15\u5165Microsoft.Office.Interop.Excel.dll\u6A21\u5757
clr.AddReferenceByName(&#39;Microsoft.Office.Interop.Excel, Version=11.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c&#39;)
from Microsoft.Office.Interop import Excel
System.Threading.Thread.CurrentThread.CurrentCulture = System.Globalization.CultureInfo(&quot;en-US&quot;)
from System.Runtime.InteropServices import Marshal
def fun(col_int):#\u6570\u5B57\u8F6C\u6362\u6210Excel\u5217\u53F7
list1=[&#39;A&#39;,&#39;B&#39;,&#39;C&#39;,&#39;D&#39;,&#39;E&#39;,&#39;F&#39;,&#39;G&#39;,&#39;H&#39;,&#39;I&#39;,
&#39;J&#39;,&#39;K&#39;,&#39;L&#39;,&#39;M&#39;,&#39;N&#39;,&#39;O&#39;,&#39;P&#39;,&#39;Q&#39;,&#39;R&#39;,
&#39;S&#39;,&#39;T&#39;,&#39;U&#39;,&#39;V&#39;,&#39;W&#39;,&#39;X&#39;,&#39;Y&#39;,&#39;Z&#39;]
col_str=&#39;&#39;
if(col_int&lt;=26):
col_str=list1[col_int-1]
elif(col_int &lt; 702):
col_int=col_int-27
col_str=list1[int(col_int/26)]+list1[int(col_int%26)]
elif(col_int==702):
col_str=&#39;ZZ&#39;
else:
col_int=col_int-703
col_str=list1[int(col_int/676)]+list1[int(col_int/26)%26]+list1[col_int%26]
return(col_str)
file = IN[0] #\u6587\u4EF6
sheetName = IN[1] #sheetName
#\u6253\u5F00Excel\u8F6F\u4EF6
ExcelApp = Excel.ApplicationClass()
ExcelApp.Visible = True #Excel\u53EF\u89C1
#\u65B0\u5EFAExcel\u8868\u683C
wb = ExcelApp.Workbooks.Add() #\u65B0\u5EFAExcel\u6587\u4EF6
ws = wb.Worksheets.Add() #\u65B0\u5EFA\u8868\u683C
ws.Name = sheetName #\u7ED9\u8868\u683C\u547D\u540D
ws = wb.Worksheets[sheetName] #\u6FC0\u6D3B\u8BE5\u8868\u683C\uFF0C\u53EF\u7701\u7565
row = IN[2] #\u884C
col = IN[3] #\u5217
data = IN[4]  #\u6570\u636E
for d in data:
x1 = row
y1 = fun(col)
for i in range(len(d)):
ws.Range[str(y1)+str(x1)].Value = d[i]#.ToString()
x1 += 1
col += 1
#\u4FDD\u5B58Excel\u6587\u4EF6\u5230\u6307\u5B9A\u76EE\u5F55
wb.SaveAs(file)
OUT = &quot;\u6570\u636E\u5199\u5165\u6210\u529F&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(f,x){const n=t("ExternalLinkIcon");return s(),r("div",null,[o,e("p",null,[e("a",v,[u,d(n)])]),m])}var p=l(a,[["render",b],["__file","excel.html.vue"]]);export{p as default};
