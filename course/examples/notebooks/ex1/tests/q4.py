OK_FORMAT = True

test = {   'name': 'q4',
    'points': None,
    'suites': [   {   'cases': [   {   'code': '>>> def test_list_files(out):\n...     output = out.splitlines()\n...     assert set(output) == set(os.listdir())\n>>> test_list_files(out)\n',
                                       'hidden': True,
                                       'locked': False,
                                       'points': 2}],
                      'scored': True,
                      'setup': '',
                      'teardown': '',
                      'type': 'doctest'}]}
