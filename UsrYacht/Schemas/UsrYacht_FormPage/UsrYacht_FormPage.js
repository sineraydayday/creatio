define("UsrYacht_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true,
					"visible": true,
					"stretch": true,
					"selectedTab": null
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true,
					"icon": null
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "4d601a7e-50c2-4604-bb59-85191bebbace",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "checkmark-icon"
				},
				"parentName": "MainHeaderBottom",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PricePerDay",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrColumn15_tp6nxkx",
					"control": "$PDS_UsrColumn15_tp6nxkx",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_agreraf",
					"control": "$PDS_UsrTicketPrice_agreraf",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_2gb30rv",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_2gb30rv",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_ycr3dgx",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_ycr3dgx",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_gi1hegf",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_gi1hegf",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ManagerEmail",
				"values": {
					"type": "crt.EmailInput",
					"label": "#ResourceString(ManagerEmail_label)#",
					"control": "$PDS_UsrManagerEmail_8t0x3ot",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_vciu5tt",
					"control": "$PDS_UsrComment_vciu5tt",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_ljwilyn",
					"control": "$PDS_UsrNumber_ljwilyn",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "PassengersCount",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_t717gs2",
					"control": "$PDS_UsrPassengersCount_t717gs2",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ComboBox_q6s7knp",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_vlkjrjb",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCountry_vlkjrjb"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_7z38n48",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_7z38n48_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_q6s7knp",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_bqurqyh",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_rtl6rbk",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCity_rtl6rbk"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_ct4njzj",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ct4njzj_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_bqurqyh",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_epsy19v",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_epsy19v_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "GridContainer_vvf3pj2",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_epsy19v",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_x7lmbgt",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_vvf3pj2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_ie4frmd",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_ie4frmd_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_x7lmbgt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_tqmpt7n",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_tqmpt7n_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_7xix1yvDS"
						}
					}
				},
				"parentName": "FlexContainer_x7lmbgt",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_unvhii2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_unvhii2_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_x7lmbgt",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_f0dhv0x",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_f0dhv0x_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_7xix1yv"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_unvhii2",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_mzi3g3u",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_mzi3g3u_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_unvhii2",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_qwermhu",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_qwermhu_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_qwermhu_GridDetail_7xix1yv",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_7xix1yv"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_qwermhu_SearchValue",
							"GridDetailSearchFilter_qwermhu_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_x7lmbgt",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_c74hm80",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_epsy19v",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_7xix1yv",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_7xix1yv",
					"primaryColumnName": "GridDetail_7xix1yvDS_Id",
					"columns": [
						{
							"id": "176a2af6-bb9e-3e3a-71c2-632ce9e109c5",
							"code": "GridDetail_7xix1yvDS_UsrStartDate",
							"caption": "#ResourceString(GridDetail_7xix1yvDS_UsrStartDate)#",
							"dataValueType": 8,
							"width": 200
						},
						{
							"id": "a912cba9-7ca6-1acb-0527-99bfe5f0bc04",
							"code": "GridDetail_7xix1yvDS_UsrEndDate",
							"caption": "#ResourceString(GridDetail_7xix1yvDS_UsrEndDate)#",
							"dataValueType": 8,
							"width": 200
						},
						{
							"id": "5e830e76-c10f-35d5-f1c2-e132c0a93e9e",
							"code": "GridDetail_7xix1yvDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_7xix1yvDS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 215
						},
						{
							"id": "043cce73-312c-2922-b03a-771ea6936bfb",
							"code": "GridDetail_7xix1yvDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_7xix1yvDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_c74hm80",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrColumn15_tp6nxkx": {
						"modelConfig": {
							"path": "PDS.UsrColumn15"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 200,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrDriveType_ycr3dgx": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrDriveType_ycr3dgx_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrStatus_2gb30rv": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_2gb30rv_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrPassengersCount_t717gs2": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 2,
									"message": "#ResourceString(PassengersCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrManager_gi1hegf": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_gi1hegf_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrComment_vciu5tt": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrNumber_ljwilyn": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCity_rtl6rbk": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCity_rtl6rbk_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrCountry_vlkjrjb": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCountry_vlkjrjb_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrTicketPrice_agreraf": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrManagerEmail_8t0x3ot": {
						"modelConfig": {
							"path": "PDS.UsrManagerEmail_8t0x3ot"
						}
					},
					"GridDetail_7xix1yv": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_7xix1yvDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_qwermhu_GridDetail_7xix1yv",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_7xix1yv_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_7xix1yvDS_UsrStartDate": {
									"modelConfig": {
										"path": "GridDetail_7xix1yvDS.UsrStartDate"
									}
								},
								"GridDetail_7xix1yvDS_UsrEndDate": {
									"modelConfig": {
										"path": "GridDetail_7xix1yvDS.UsrEndDate"
									}
								},
								"GridDetail_7xix1yvDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_7xix1yvDS.UsrCustomer"
									}
								},
								"GridDetail_7xix1yvDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_7xix1yvDS.CreatedOn"
									}
								},
								"GridDetail_7xix1yvDS_Id": {
									"modelConfig": {
										"path": "GridDetail_7xix1yvDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_7xix1yv_PredefinedFilter": {
						"value": null
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_7xix1yvDS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht",
							"attributes": {
								"UsrManagerEmail_8t0x3ot": {
									"path": "UsrManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_7xix1yvDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndDate": {
									"path": "UsrEndDate"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{

				request: "usr.PushButtonRequest",

				/* Implementation of the custom query handler. */

				handler: async (request, next) => {

					console.log("Button works...");

					Terrasoft.showInformation("My button was pressed.");

					var price = await request.$context.PDS_UsrColumn15_tp6nxkx;

					console.log("Price = " + price);

					request.$context.PDS_UsrComment_vciu5tt = "comment from JS code!";

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);

				}
			},
			{

				request: "crt.HandleViewModelAttributeChangeRequest",

				/* The custom implementation of the system query handler. */

				handler: async (request, next) => {

      				if (request.attributeName === 'PDS_UsrColumn15_tp6nxkx' || 		        // if price changed

					   request.attributeName === 'PDS_UsrPassengersCount_t717gs2l' ) { 		// or Passenger count changed

						let price = await request.$context.PDS_UsrColumn15_tp6nxkx;

						let passengers = await request.$context.PDS_UsrPassengersCount_t717gs2;

						let ticket_price = price / passengers;

						request.$context.PDS_UsrTicketPrice_agreraf = ticket_price;

					}

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);

				}

			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{

			/* The validator type must contain a vendor prefix.

			Format the validator type in PascalCase. */

			"usr.DGValidator": {

				validator: function (config) {

					return function (control) {

						let value = control.value;

						let minValue = config.minValue;

						let valueIsCorrect = value >= minValue;

						var result;

						if (valueIsCorrect) {

							result = null;

						} else {

							result = {

								"usr.DGValidator": { 

									message: config.message

								}

							};

						}

						return result;

					};

				},

				params: [

					{

						name: "minValue"

					},

					{

						name: "message"

					}

				],

				async: false

			}

		}/**SCHEMA_VALIDATORS*/
	};
});