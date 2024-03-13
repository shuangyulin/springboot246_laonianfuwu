package com.entity.view;

import com.entity.GoumaixinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 购买信息
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-04-19 16:11:38
 */
@TableName("goumaixinxi")
public class GoumaixinxiView  extends GoumaixinxiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public GoumaixinxiView(){
	}
 
 	public GoumaixinxiView(GoumaixinxiEntity goumaixinxiEntity){
 	try {
			BeanUtils.copyProperties(this, goumaixinxiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
