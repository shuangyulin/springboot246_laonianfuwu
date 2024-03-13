package com.entity.model;

import com.entity.TongjishangpinEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
 

/**
 * 统计商品
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2022-04-19 16:11:38
 */
public class TongjishangpinModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 统计名称
	 */
	
	private String tongjimingcheng;
		
	/**
	 * 订单数
	 */
	
	private Integer dingdanshu;
		
	/**
	 * 统计时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date tongjishijian;
		
	/**
	 * 备注
	 */
	
	private String beizhu;
				
	
	/**
	 * 设置：统计名称
	 */
	 
	public void setTongjimingcheng(String tongjimingcheng) {
		this.tongjimingcheng = tongjimingcheng;
	}
	
	/**
	 * 获取：统计名称
	 */
	public String getTongjimingcheng() {
		return tongjimingcheng;
	}
				
	
	/**
	 * 设置：订单数
	 */
	 
	public void setDingdanshu(Integer dingdanshu) {
		this.dingdanshu = dingdanshu;
	}
	
	/**
	 * 获取：订单数
	 */
	public Integer getDingdanshu() {
		return dingdanshu;
	}
				
	
	/**
	 * 设置：统计时间
	 */
	 
	public void setTongjishijian(Date tongjishijian) {
		this.tongjishijian = tongjishijian;
	}
	
	/**
	 * 获取：统计时间
	 */
	public Date getTongjishijian() {
		return tongjishijian;
	}
				
	
	/**
	 * 设置：备注
	 */
	 
	public void setBeizhu(String beizhu) {
		this.beizhu = beizhu;
	}
	
	/**
	 * 获取：备注
	 */
	public String getBeizhu() {
		return beizhu;
	}
			
}
