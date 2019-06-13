TW.IDE.Widgets.Autocomplete = function () {
	this.widgetProperties = function () {
		return {
			'name' : 'Autocomplete',
			'description' : 'Enables selection of items from a list based on autosuggest',
			'category' : ['Common'],
            'isResizable': true,
			'supportsAutoResize': true,
			'supportsLabel': true,
			'isExtension':true,
			'properties' : {
				'MinimumLength': {
                    'isEditable': true,
                    'baseType': 'INTEGER',
					'defaultValue' : 3,
					'description': 'Set the minimum number of characters after you want the widget to fire the search event',
                },
				
                'CustomClass': {
                    'description': TW.IDE.I18NController.translate('tw.button-ide.properties.custom-class.description'),
                    'baseType': 'STRING',
                    'isLocalizable': false,
                    'isBindingSource': true,
                    'isBindingTarget': true,
                    'isVisible': false
                },
				'TabSequence': {
                    'description': TW.IDE.I18NController.translate('tw.button-ide.properties.tab-sequence.description'),
                    'baseType': 'NUMBER',
                    'defaultValue': 0
                },
         
				'Delay': {
                    'isEditable': true,
                    'baseType': 'INTEGER',
					'defaultValue' : 200,
					'description': 'The delay in milliseconds between when a keystroke occurs and when a search is performed',
                },
				
				'ChangedText': {
                    'isEditable': false,
                    'baseType': 'STRING',
					'description': 'Text currently typed in the input box',
					'isBindingSource': true
                },
				'Style': {
                    'description': TW.IDE.I18NController.translate('tw.textbox-ide.properties.style.description'),
                    'baseType': 'STYLEDEFINITION',
					'defaultValue' : 'DefaultTextBoxStyle'
                },
				'DefaultTextboxFocusStyle': {
                    'description': TW.IDE.I18NController.translate('tw.textbox-ide.properties.default-textbox-focus-style.description'),
                    'baseType': 'STYLEDEFINITION',
					'defaultValue': 'DefaultFocusStyle'
                },
                
                'SelectedText': {
                    'isEditable': false,
                    'baseType': 'STRING',
					'description': 'Text that was selected from the suggestion list',
					'isBindingSource': true
                },
				
				'AutoFocus': {
                    'isEditable': true,
                    'baseType': 'BOOLEAN',
					'defaultValue' : true,
					'description': 'If set to true the first item will automatically be focused when the menu is shown',
                },
				 'Data': {
                    'isBindingTarget': true,
                    'isEditable': false,
                    'baseType': 'INFOTABLE',
                    'warnIfNotBoundAsTarget': true
                },
				'DisplayField': {
                    'description': 'The infotable field which represents the value that will be displayed',
                    'isVisible': true,
                    'isEditable': true,
                    'baseType': 'FIELDNAME',
                    'sourcePropertyName': 'Data'
                }
				,
				 'ValueField': {
                    'description': 'Field to use for SelectedText, only when the SendValueAsSelectedText is true',
                    'baseType': 'FIELDNAME',
                    'sourcePropertyName': 'Data'
                },
                'SendValueAsSelectedText': {
                    'isEditable': true,
                    'baseType': 'BOOLEAN',
					'defaultValue' : false,
					'description': 'If set to true the the value will be sent as the SelectedText back to the platform',
                }
				
                
				
			}
		};
	};
	 this.widgetEvents = function () {
        return {
         'TextChanged': {
			  'description': 'Triggered whenever a new alphanumeric is inserted in the search box. Should be the input of a Service used for search serve-side'
		 },
          'TextSelected':{
			    'description': 'Triggered whenever the user selects a suggested item, via mouse click or arrow+Enter'
		  }    
        }
    };
	 this.renderHtml = function () {
	
        var html = '';
        html += '<div class="widget-content widget-Autocomplete">';
        html += '<span>Autocomplete here</span>';
        html += '</div>';
        return html;
    };
	
	this.afterRender = function () {
};
	
	    this.afterSetProperty = function (name, value) {
		return false;
    };

};