function delid(id,table)
{
	if(!confirm('请谨慎删除,确定要删除吗？')){ return false; }
 if(id<1){ show_('id为空，无法删除数据'); return false; }	
 if(table==''){ show_('数据表为空，无法删除数据'); return false; }	
 
	 show1_('删除中...');
	 if(table!='news_info')
	 {
		 var delurl="run.php?m=Pub&a=del&table="+table+"&id="+id;
	 }else{
		 var delurl="run.php?m=Pub&a=del_news&table="+table+"&id="+id;
	 }
 $.get(delurl,function(data,status){
     if(data=='y')
	 {
	   show_('删除成功');
	   $("#"+id).html('');
	   $("#"+id).hide();
	   return false; 
	 }else{
	 show_(data);
	 return false;
	 }
  });
}



function cmsconfirm(text)
{
	layer.open({
	content: ''+text+'',
	btn: ['确认', '取消'],
	shadeClose: false,
	yes: function(){
	  layer.open({content: '确认取消认购', time: 1});
	  return true;
	}, no: function(){
	return false;
	}
	});
}

function deltype(id)
{
  show1_('删除中...');
 $.get("run.php?m=Pub&a=deltype&id="+id,function(data,status){
     if(data=='y')
	 {
	   show_('删除成功');
	   $("#"+id).html('');
	   $("#"+id).hide();
	    return false;
	 }else{
	   show_(data);
	 return false;
	 }
  });
}


